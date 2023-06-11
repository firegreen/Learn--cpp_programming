import React, { useEffect, useState } from "react";
import axios from 'axios';
import * as cheerio from 'cheerio';

import { Chip, Avatar, CircularProgress, Tooltip } from "@mui/material";
import { Icon } from '@iconify/react';

export default function VSCodeExtension({ id }) {

  const [iconSrc, SetIconSrc] = useState("loading");

  const link = `https://marketplace.visualstudio.com/items?itemName=${id}`;

  const extensionName = id.split('.')[1];
  
  // Icon scrapping
  const GetIconSrc = async () => {
    try {
      const { data } = await axios(link);
      const $ = cheerio.load(data);
      const extensionIconSrc = $('div#section-banner').find('img.image-display').attr().src;
      SetIconSrc(extensionIconSrc);
    } catch (err) {
      SetIconSrc(null);
    }
  };

  useEffect(() => {
    GetIconSrc();
  }, []);
  
  if (iconSrc == null) {
    return (
      <Tooltip title={`Unable to fetch link to VSCode extension with id: "${id}"`}>
        <Chip
        avatar={<Icon icon="openmoji:cross-mark" height="48" />}
        label={extensionName}
        variant="outlined"
        color="error"
        />
      </Tooltip>
    )
  }
  return (
    <Chip
    component={'a'}
    avatar={(iconSrc != "loading" && <Avatar alt={id} src={iconSrc} component={'span'}/>) || <CircularProgress size={24} component={'span'}/>}
    label={extensionName}
    href={link}
    clickable
    variant="outlined"
    />
  )
}